---
order: 3
---

# Manual installation

## Requirements

For a manual installation, the following requirements must be met:

- [Node.js 20.11.x](https://nodejs.org/en/download/)
- [pnpm 8.15.x](https://pnpm.io/installation) or higher
- [Redis 7.x](https://redis.io/download)
- [MongoDB 5.x](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/downloads)

## Installation

### Clone the repository

```bash
git clone https://github.com/viewtube/viewtube.git
```

### Set environment variables

Edit the file `server/.env` to set any necessary [environment variables](/configuration/environment).

### Install dependencies

```bash
cd viewtube

pnpm install
```

### Build the project

```bash
pnpm run build
```

### Run the project

```bash
pnpm run start
```

Visit [http://localhost:8066](http://localhost:8066) to see the running instance.
