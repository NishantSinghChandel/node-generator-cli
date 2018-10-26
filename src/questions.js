const templateType = require('./templateType');
const wizardType = require('./wizardType');
const path = require('path');
const fs = require('fs');
const toSpaceCase = require('to-space-case');

exports.getGeneratorQuestions = function (type, settings, name) {
  let questions;

  switch (type) {
    case wizardType.WIZARD: {
      questions = [askType(), askName(name), askDestination(templateType.MODEL, settings.modelDestination, true), askDestination(templateType.ROUTER, settings.routerDestination, true), askDestination(templateType.CONTROLLER, settings.controllerDestination, true)];
      break;
    }
    case wizardType.MODEL: {
      questions = [askName(name), askDestination(templateType.MODEL, settings.modelDestination)];
      break;
    }
    case wizardType.CONTROLLER: {
      questions = [askName(name), askDestination(templateType.CONTROLLER, settings.controllerDestination)];
      break;
    }
    case wizardType.ROUTER: {
      questions = [askName(name), askDestination(templateType.ROUTER, settings.routerDestination)];
      break;
    }
  }

  return questions;
};

exports.getSettingQuestions = function (settings) {
  return Object.keys(settings).map(key => askSetting(key, settings[key]));
};

exports.getCopyQuestions = function (destination) {
  return [askCopyDestination(destination)];
};

function askSetting(key, defaultValue) {
  return {
    type: 'input',
    name: key,
    message: toSpaceCase(key),
    default: defaultValue || ''
  }
}

function askType() {
  return {
    type: 'list',
    name: 'type',
    message: 'What do you want to generate?',
    choices: Object.keys(templateType).map((key) => templateType[key])
  }
}

function askName(defaultName) {
  return {
    type: 'input',
    name: 'name',
    message: 'What name do you want to use?',
    default: defaultName || '',
    filter(value){
      return value.trim();
    },
    validate(value){
      return value.trim().length == 0 ? 'No name given' : true;
    }
  }
}

function askCopyDestination(defaultDestination) {
  return {
    type: 'input',
    name: 'destination',
    message: 'destination',
    default: defaultDestination || '.'
  }
}

function askDestination(name, defaultDestination, optional = false) {
  return {
    type: 'input',
    name: 'destination',
    message: 'Where do you want to create the ' + name + '?',
    default: defaultDestination || '',
    when(answers){
      return !optional || (optional && answers.type == name);
    },
    validate(input){
      const destination = path.resolve(input);

      if (!fs.existsSync(destination)) {
        return `path: ${destination} doesn't exist`;
      }
      return true;
    }
  }
}
