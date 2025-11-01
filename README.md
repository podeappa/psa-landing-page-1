**Path:** `psa-landing-page/README.md`

````text
# Task 1: Building and Automating a Next.js Landing Page Deployment Pipeline 

## 1. Project Overview and CLI Compliance

This project implements a secure, automated CI/CD pipeline for a Next.js static landing page. It serves as the primary deliverable for Task 1, demonstrating knowledge in web development, security governance, and advanced CI/CD debugging.


### A. Repository Initialization and Setup

The project was created and initialized using the following sequence:

1. **Local Setup:** `mkdir psa-landing-page` followed by `cd psa-landing-page`.
2. **Next.js Creation:** `npx create-next-app@latest . --ts --eslint --tailwind --app --import-alias "@/*" --skip-git` (Skipping automatic Git init).
3. **Git Initialization:** `git init`
4. **Remote Configuration:** `git remote add origin <YOUR_GITHUB_REPO_URL>`
5. **Initial Push:** `git push -u origin main`

### B. Final Application State

| Item | Detail |
| :--- | :--- |
| **Stack** | Next.js 14 (App Router), React, Tailwind CSS |
| **CLI Status** | All work is complete, with history showing comprehensive feature, fix, and chore commits. |
| **Key Configuration** | `next.config.mjs` includes `output: 'export'` and `basePath: ''` for robust static deployment. |
| **Live URL & Status** | **https://psa-landing-page.vercel.app/** (Verified styled and functional after extensive troubleshooting.) |

---

## 2. GitHub Actions Workflows (Triggers and Outcomes)

Three distinct workflows establish automation and governance within the repository.

### 2.1. Workflow 1: Continuous Deployment (`deploy.yml`)

**Goal:** Automatic build and deployment of the application to Vercel.

| Configuration | Detail |
| :--- | :--- |
| **Trigger** | `on: push` to `branches: [main]` |
| **Action Used** | `amondnet/vercel-action@v25` |
| **Security** | Authentication is handled by securely injected **Secrets** (`VERCEL_TOKEN`, `VERCEL_ORG_ID`). |
| **Outcome Verification** | **Successful Deployment:** |

### 2.2. Workflow 2: PR Auto-Closure (`close-pr.yml`)

**Goal:** Enforce governance by blocking code contributions from external, unauthorized users.

| Configuration | Detail |
| :--- | :--- |
| **Trigger** | `on: pull_request` (opened, synchronized, reopened) |
| **Security Logic** | `if: github.actor != github.repository_owner` (Blocks non-owners). |
| **Outcome Verification** | **PR Closure:** |

### 2.3. Workflow 3: Issue Comment Response (`help-response.yml`)

**Goal:** Automate communication policy for standardized support responses.

| Configuration | Detail |
| :--- | :--- |
| **Trigger** | `on: issue_comment` (created) |
| **Security Logic** | Shell script ensures case-insensitive check for `/help` and prevents self-triggering loops. |
| **Outcome Verification** | **Issue Response:** |

---

## 3. Detailed Deliverable: Security & Configuration Log

This section provides the required detailed breakdown of environment variables, secrets, and permissions for final review.

### A. Environment Variables and Secrets Used

| Variable Name | Type | Value/Source | Purpose |
| :--- | :--- | :--- | :--- |
| `VERCEL_PROJECT_ID` | Environment Variable | [Insert Vercel Project ID Here] | Non-sensitive ID identifying the target Vercel project. |
| `VERCEL_ORG_ID` | Secret | `${{ secrets.VERCEL_ORG_ID }}` | Organization/Team ID for Vercel account context (stored securely). |
| `VERCEL_TOKEN` | Secret | `${{ secrets.VERCEL_TOKEN }}` | Personal Access Token granting deployment authority (stored securely). |




