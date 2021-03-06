# Team Awesome

Team Awesome is a web application where Humanoids employees can store everything that concerns their day-to-day work.

## Features

The app allows individual employees to:

- hold a profile that is accessible on all pages.
- record worked hours on the "Timesheets" page.
- provide information about projects and clients on the "Team members" page.
- store important documents on the "Documents" page.

## Installation

For this app Node and NPM are required.

```bash
#Homebrew is used as package manager and Formulae is used as package browser. If you don't have these installed yet, here's how to do that:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

#To install Node and NPM:
brew install node

#To install the necessary dependencies from the package.json:
npm i
```

## Stack

The technologies used in this project are:

- Prettier: for code formatting
- ESLint: for code linting
- Typescript: for more reliable code
- Vercel: for deployment of the app on GitHub
- Jest: for running unit tests
- Cypress: for running end-to-end tests
- Storybook: for a visual documentation and test environment of components

## Usage

### General

The package.json contains several scripts that enable you to:

```bash
#Run a development version on your localhost
npm run dev

#Run Storybook
npm run storybook

#Run Jest tests
npm run test
```

### Functionality

- Time entries can be added with the "New time entry" button, which opens a modal with a form that can be submitted. Likewise, team members can be added with the "New Humanoid" button.
- Both time entries and team members can be filtered with the select drop-down list.

## Contributing

Pull requests are welcome. Before pushing, please make sure to run all tests. For major changes, please open an issue first to discuss what you would like to change.

## Authors and acknowledgment

I want to thank God for giving me faith, mom and dad for always being there, Humanoids for guidance etc.
