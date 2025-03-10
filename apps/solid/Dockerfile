FROM node:22-alpine AS base

# -------------------------------
# Stage 1: Builder
# -------------------------------
FROM base AS builder
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune solid --docker

# -------------------------------
# Stage 2: Installer
# -------------------------------
FROM base AS installer
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app


# Install Turbo globally in the installer stage as well
RUN npm install -g turbo

# Copy the pruned package files and install dependencies
COPY --from=builder /app/out/json/ ./

# Remove potential leftovers and reinstall dependencies
RUN rm -rf package-lock.json node_modules && npm install

# Copy the full pruned repository and build the project
COPY --from=builder /app/out/full/ .
RUN turbo run build

# -------------------------------
# Stage 3: Runner
# -------------------------------
FROM base AS runner
WORKDIR /app

# Create a non-root user for better security (Dont run production as root)
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 solid
USER solid

# Copy the production build output from the installer stage
COPY --from=installer --chown=solid:nodejs /app/apps/solid/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]

