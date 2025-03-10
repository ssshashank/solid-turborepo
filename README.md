# Solid-Turborepo Starter

A modern Turborepo starter for building SolidJS applications with a complete development setup. This starter comes equipped with the npm package manager, Vinxi Bundler for optimized builds, Tailwind CSS v4 for styling, ESLint for code quality, and Docker for containerized deployments.

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [What's Inside?](#whats-inside)
- [Build & Develop](#build--develop)
- [Remote Caching](#remote-caching)
- [Useful Links](#useful-links)
- [License](#license)

## Overview

This starter project leverages Turborepo to manage a monorepo structure that combines a SolidJS application with shared component libraries and configuration packages. It provides a robust setup for modern web development:

## Getting Started

To bootstrap your new turborepo using this starter, simply run:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `solid`: a [Solid Start](https://start.solidjs.com/) app
- `@repo/ui`: a stub Solid component library shared by both `solid` applications
- `@repo/eslint-config`: `eslint` configurations
- `@repo/tailwind-config`: [Tailwind](https://tailwindcss.com/) v4 configurations
- `vinxi`: [Vinxi](https://vinxi.vercel.app/) Bundler\*\* for efficient bundling.
- `docker`: [Docker](https://www.docker.com/) setup for containerized deployment.

## Build & Develop

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
npm build
```

### Run via docker

```
docker-compose up --build
```

This will start your application on `localhost:3000`

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
npm dev
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

## License

This project is licensed under the MIT License.
