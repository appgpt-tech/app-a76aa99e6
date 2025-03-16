//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';
import grOriginal from 'ra-language-greek';

const enResources = {
  resources: {
    Users: {
      name: 'Users',
      fields: {
        userName: 'User Name',
        department: 'Department',
        password: 'Password',
        email: 'Email',
        id: 'id',
      },
    },
    Departments: {
      name: 'Departments',
      fields: {
        departmentName: 'Department Name',
        departmentHead: 'Department Head',
        id: 'id',
      },
    },
    Initiatives: {
      name: 'Initiatives',
      fields: {
        name: 'Name',
        description: 'Description',
        startDate: 'Start Date',
        endDate: 'End Date',
        relatedDepartment: 'Related Department',
        status: 'Status',
        id: 'id',
      },
    },
    Goals: {
      name: 'Goals',
      fields: {
        name: 'Name',
        description: 'Description',
        targetDate: 'Target Date',
        relatedDepartment: 'Related Department',
        status: 'Status',
        id: 'id',
      },
    },
    Emissionsources: {
      name: 'Emission Sources',
      fields: {
        sourceType: 'Source Type',
        quantityUsed: 'Quantity Used',
        emissionFactors: 'Emission Factors',
        totalEmissions: 'Total Emissions',
        id: 'id',
      },
    },
    Resourceusage: {
      name: 'Resource Usage',
      fields: {
        resourceType: 'Resource Type',
        quantityConsumed: 'Quantity Consumed',
        unitOfMeasurement: 'Unit Of Measurement',
        periodOfConsumption: 'Period Of Consumption',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    Users: {
      name: 'Users (fr)',
      fields: {
        userName: 'User Name (fr)',
        department: 'Department (fr)',
        password: 'Password (fr)',
        email: 'Email (fr)',
        id: 'id',
      },
    },
    Departments: {
      name: 'Departments (fr)',
      fields: {
        departmentName: 'Department Name (fr)',
        departmentHead: 'Department Head (fr)',
        id: 'id',
      },
    },
    Initiatives: {
      name: 'Initiatives (fr)',
      fields: {
        name: 'Name (fr)',
        description: 'Description (fr)',
        startDate: 'Start Date (fr)',
        endDate: 'End Date (fr)',
        relatedDepartment: 'Related Department (fr)',
        status: 'Status (fr)',
        id: 'id',
      },
    },
    Goals: {
      name: 'Goals (fr)',
      fields: {
        name: 'Name (fr)',
        description: 'Description (fr)',
        targetDate: 'Target Date (fr)',
        relatedDepartment: 'Related Department (fr)',
        status: 'Status (fr)',
        id: 'id',
      },
    },
    Emissionsources: {
      name: 'Emission Sources (fr)',
      fields: {
        sourceType: 'Source Type (fr)',
        quantityUsed: 'Quantity Used (fr)',
        emissionFactors: 'Emission Factors (fr)',
        totalEmissions: 'Total Emissions (fr)',
        id: 'id',
      },
    },
    Resourceusage: {
      name: 'Resource Usage (fr)',
      fields: {
        resourceType: 'Resource Type (fr)',
        quantityConsumed: 'Quantity Consumed (fr)',
        unitOfMeasurement: 'Unit Of Measurement (fr)',
        periodOfConsumption: 'Period Of Consumption (fr)',
        id: 'id',
      },
    },
  },
};
const grResources = {
  resources: {
    Users: {
      name: 'Users (gr)',
      fields: {
        userName: 'User Name (gr)',
        department: 'Department (gr)',
        password: 'Password (gr)',
        email: 'Email (gr)',
        id: 'id',
      },
    },
    Departments: {
      name: 'Departments (gr)',
      fields: {
        departmentName: 'Department Name (gr)',
        departmentHead: 'Department Head (gr)',
        id: 'id',
      },
    },
    Initiatives: {
      name: 'Initiatives (gr)',
      fields: {
        name: 'Name (gr)',
        description: 'Description (gr)',
        startDate: 'Start Date (gr)',
        endDate: 'End Date (gr)',
        relatedDepartment: 'Related Department (gr)',
        status: 'Status (gr)',
        id: 'id',
      },
    },
    Goals: {
      name: 'Goals (gr)',
      fields: {
        name: 'Name (gr)',
        description: 'Description (gr)',
        targetDate: 'Target Date (gr)',
        relatedDepartment: 'Related Department (gr)',
        status: 'Status (gr)',
        id: 'id',
      },
    },
    Emissionsources: {
      name: 'Emission Sources (gr)',
      fields: {
        sourceType: 'Source Type (gr)',
        quantityUsed: 'Quantity Used (gr)',
        emissionFactors: 'Emission Factors (gr)',
        totalEmissions: 'Total Emissions (gr)',
        id: 'id',
      },
    },
    Resourceusage: {
      name: 'Resource Usage (gr)',
      fields: {
        resourceType: 'Resource Type (gr)',
        quantityConsumed: 'Quantity Consumed (gr)',
        unitOfMeasurement: 'Unit Of Measurement (gr)',
        periodOfConsumption: 'Period Of Consumption (gr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);
const gr = mergeTranslations(grOriginal, grResources);

const translations = { en, fr, gr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
    { locale: 'gr', name: 'Ελληνικά' },
  ],
);
