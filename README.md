# JulesAI-WebTests

## Project Overview

This project utilizes Playwright for end-to-end testing and employs the Page Object Model (POM) design pattern for improved test maintainability and readability.

## Prerequisites

- Node.js and npm (or yarn) installed
- Playwright installed (**run:** `npm init playwright@latest`)

## Project Structure

**page-objects:** Contains page object files representing different pages of the application.
**tests:** Contains test cases using the page objects.
**playwright.config.js:** Configuration file for Playwright.

## Getting Started

- Clone this repository.
- Install dependencies: npm install
- **Run tests:** `npm test`
- **View test reports:** `npm run report`

## Additional Commands

- **Generate test code:** `npx playwright codegen`
- **Open Playwright inspector:** `npx playwright codegen`
