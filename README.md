# Byron's Portfolio

![Portfolio Preview](public/images/relay_logo.png)

A portfolio site built with Next.js, Tailwind CSS, and Framer Motion, showcasing my web development projects and skills.

## 🛠️ Technologies

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, Shadcn/UI components
- **Animations**: Framer Motion

## 🚀 Getting Started

First, clone the repository:

```bash
git clone <https://github.com/byrondray/portfolio.git>
cd portfolio
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `src/app/page.tsx` - Main portfolio page
- `src/app/details/[id]/page.tsx` - Dynamic project detail pages
- `src/components/` - Reusable UI components
- `src/data/projectData.ts` - Project information data store
- `public/images/` - Project images and screenshots

## 🎨 Customization

To add or modify projects, edit the `src/data/projectData.ts` file with your project information.

Each project can include:

- Title, description, and technologies used
- Links to GitHub repository and live demo
- Detailed features and technical challenges
- Screenshots and demo videos

## 🔄 Future Improvements

- Add dark/light mode toggle
- Implement blog section with MDX
- Add filterable project categories
- Add contact form with server actions

---

Created with 💻 by Byron Dray | [GitHub](https://github.com/byrondray) | [LinkedIn](https://www.linkedin.com/in/byron-dray)
