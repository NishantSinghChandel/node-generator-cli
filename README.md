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



#### settings

Set or display settings. Without any options it will display the settings. By default it will set the settings locally in a .vuegenerator file.
You can also set global settings by using the global option ```-g --global```.

```console
$ ng settings
```

Options:

* ```-m, --model-destination <destination>```: Set default model destination.
* ```-c, --controller-destination <destination>```: Set default controller destination.
* ```-r, --router-destination <destination>```: Set default router destination.
* ```-t, --template-path <template-path>```: Set template path.
* ```-l, --log```: Log global or local settings depending on the global flag.
* ```-g, --global```: Set global settings.

Examples:
```console
$ ng settings -l
$ ng settings -m ./model -c ./contoller -r ./router -t ./template
$ ng settings -g -c ./controllers
```

#### reset

Reset global settings to the defaults.

```console
$ ng reset
```

#### show-templates

Open the default template directory. The default templates can be edited to fit your needs. 

```console
$ ng show-templates
```

#### copy-templates

Copy the default templates to another directory. This is handy when you want to customize the default templates. 
Don't forget to run ```ng init``` or set the template path with ```ng settings```.

```console
$ ng copy-templates
```

