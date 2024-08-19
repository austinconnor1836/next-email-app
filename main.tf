terraform {
  required_providers {
    postgresql = {
      source  = "cyrilgdn/postgresql"
      version = "1.13.0"
    }
  }

  required_version = ">= 0.13"
}

provider "postgresql" {
  host            = "localhost"
  port            = 5432
  username        = "myuser"
  password        = "mypassword"
  sslmode         = "disable"
  connect_timeout = 15
}

resource "postgresql_database" "mydatabase" {
  name              = "mydatabase"
  owner             = "myuser"
  connection_limit  = -1
}

resource "postgresql_schema" "shared" {
  name     = "shared"
  database = postgresql_database.mydatabase.name
}

resource "postgresql_table" "posts" {
  name     = "posts"
  schema   = postgresql_schema.shared.name
  database = postgresql_database.mydatabase.name

  owner    = "myuser"

  column {
    name = "id"
    type = "serial"
    null = false
  }

  column {
    name = "title"
    type = "varchar(255)"
    null = false
  }

  column {
    name = "content"
    type = "text"
    null = false
  }

  primary_key {
    name   = "posts_pkey"
    column = ["id"]
  }
}
