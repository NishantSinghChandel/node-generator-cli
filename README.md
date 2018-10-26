# node-generator-cli

A CLI for node to generate file for controllers, router and models.

## Install

```console
$ npm install -g node-generator-cli
```

## Usage

The most basic command runs a wizard.

```console
$ ng
```

**Note**: Names can be inputted in any format (slug-case, camelCase, PascalCase, UPPERCASE, lowercase etc.).

#### controller

Directly create a controller based on the current settings.

```console
$ ng controller <name>
```

Arguments:

- `name`: The name you want to use for the controller.

Options:

- `-d, --destination <destination>`: Override the destination for controller.
- `-p, --template-path <template-path>`: Override template path.
- `-t, --template <template>`: Override template type. By default it uses the 'controller' folder from the template path. With this option you can use a different template folder.
- `-f, --force`: Force creation of a controller. By default it's impossible to create a controller if the destination path doesn't exist. This option forces the creation of a controller and will generates the destination folders if they don't exist.

Examples:

```console
$ ng controller address
$ ng component address -d ./controllers/
$ ng component address -d ./src/components/address/ -t base-address-controller -f
```

The generated file will be
`*filename.js`

#### Router

Directly create a router based on the current settings.

```console
$ ng router <name>
```

Arguments:

- `name`: The name you want to use for the router.

Options:

- `-d, --destination <destination>`: Override the destination for router.
- `-p, --template-path <template-path>`: Override template path.
- `-t, --template <template>`: Override template type. By default it uses the 'router' folder from the template path. With this option you can use a different template folder.
- `-f, --force`: Force creation of a router. By default it's impossible to create a router if the destination path doesn't exist. This option forces the creation of a router and will generates the destination folders if they don't exist.

Examples:

```console
$ ng router address
$ ng router address -d ./router/address
$ ng router address -d ./src/router/address/ -t base-route -f
```

The generated file will be
`*filename.js`

#### model

Directly create a model based on the current settings.

```console
$ ng model <name>
```

Arguments:

name: The name you want to use for the model.
Options:

- `-d, --destination <destination>`: Override the destination for model.
- `-p, --template-path <template-path>`: Override template path.
- `-t, --template <template>`: Override template type. By default it uses the 'model' folder from the template path. With this option you can use a different template folder.
- `-f, --force`: Force creation of a model. By default it's impossible to create a model if the destination path doesn't exist. This option forces the creation of a model and will generates the destination folders if they don't exist.

Examples:

```
$ ng model address
$ ng model address -d ./models
$ ng model address -t address-model
```

The generated file will be
`*filename.js`
