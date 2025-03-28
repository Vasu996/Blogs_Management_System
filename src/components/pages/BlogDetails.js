import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  // Blogs array with consistent image paths
  const blogs = [
    {
      id: 1,
      title: "Mastering React Hooks",
      image: "/Assets/Mastering React Hooks.png",
      author: "John Doe",
      description: "Master React Hooks for state management and effective workflows.",
      content:
        "Mastering React Hooks is essential for modern React development, enabling functional components to manage state, side effects, and context without relying on class components. Hooks like useState, useEffect, useContext, and useReducer simplify logic, improve reusability, and enhance performance. This guide also includes best practices, tips, and common pitfalls to avoid when working with hooks.",
      video: "https://www.youtube.com/watch?v=f687hBjwFcM",
      books: [
        "React - Up & Running by Stoyan Stefanov",
        "Learning React by Alex Banks and Eve Porcello",
      ],
      references: [
        "https://reactjs.org/docs/hooks-intro.html",
        "https://blog.logrocket.com/understanding-react-hooks/",
      ],
    },
    {
      id: 2,
      title: "The Future of AI in 2025",
      image: "/Assets/The Future of AI in 2025.jpeg",
      author: "Jane Smith",
      description: "Explore groundbreaking advancements in AI.",
      content:
        "Artificial Intelligence is reshaping industries with its ability to analyze data, automate tasks, and improve decision-making processes. This article discusses AI trends like generative models, advancements in machine learning, and their profound impact on fields like healthcare, finance, and autonomous systems.",
      video: "https://www.youtube.com/watch?v=OhCzX0iLnOc",
      books: [
        "AI Superpowers by Kai-Fu Lee",
        "Life 3.0: Being Human in the Age of Artificial Intelligence by Max Tegmark",
      ],
      references: [
        "https://www.forbes.com/sites/forbestechcouncil/2023/03/15/future-ai-trends/",
        "https://research.google.com/ai.html",
      ],
    },
    {
      id: 3,
      title: "Top 10 JavaScript Tips",
      image: "/Assets/Top_10_JavaScript_Tips.png",
      author: "Mike Johnson",
      description: "Boost productivity with expert JavaScript tips.",
      content:
        "Discover ten essential JavaScript tips to improve coding efficiency, including optimized DOM manipulations, advanced ES6+ features, debugging techniques, and best practices for writing clean, maintainable code. These tips are perfect for both beginners and seasoned developers.",
      video: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
      books: [
        "JavaScript: The Good Parts by Douglas Crockford",
        "Eloquent JavaScript by Marijn Haverbeke",
      ],
      references: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        "https://javascript.info/",
      ],
    },
    {
      id: 4,
      title: "CSS Tricks for Developers",
      image: "/Assets/CSS_Tricks_for_Developers.png",
      author: "Emily Davis",
      description: "Advanced CSS tricks to create visually stunning layouts.",
      content:
        "From responsive designs to complex animations, this article covers advanced CSS techniques that elevate web design. Learn about CSS Grid, Flexbox tips, custom properties, media queries, and unique transitions that enhance user experiences.",
      video: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
      books: [
        "CSS Secrets by Lea Verou",
        "Transcending CSS: The Fine Art of Web Design by Andy Clarke",
      ],
      references: [
        "https://developer.mozilla.org/en-US/docs/Web/CSS",
        "https://css-tricks.com/",
      ],
    },
    {
      id: 5,
      title: "Why TypeScript is the Future",
      image: "/Assets/Why_TypeScript_is_the_Future.jpeg",
      author: "Chris Wilson",
      description: "Learn why TypeScript is revolutionizing development.",
      content:
        "TypeScript combines the flexibility of JavaScript with strong typing, making code more predictable and easier to debug. This guide explains why developers prefer TypeScript for large-scale projects, highlighting benefits like better tooling, enhanced code maintainability, and improved developer experience.",
      video: "https://www.youtube.com/watch?v=BwuLxPH8IDs",
      books: [
        "TypeScript Quickly by Yakov Fain and Anton Moiseev",
        "Programming TypeScript by Boris Cherny",
      ],
      references: [
        "https://www.typescriptlang.org/docs/",
        "https://medium.com/swlh/why-typescript-why-not-typescript-81b85a05c14",
      ],
    },
    {
      id: 6,
      title: "Exploring Node.js Performance",
      image: "/Assets/Exploring_Nodejs_Performance.png",
      author: "Robert Brown",
      description: "Optimize your Node.js backend like a pro.",
      content:
        "Node.js is known for its lightweight, efficient event-driven architecture, but optimizing performance requires knowledge of caching strategies, clustering, and memory management. This article dives deep into techniques to maximize your backend's throughput and ensure scalability.",
      video: "https://www.youtube.com/watch?v=lvX9t6FOwcw",
      books: [
        "Node.js in Action by Mike Cantelon, Marc Harter, T.J. Holowaychuk, and Nathan Rajlich",
        "Mastering Node.js by Sandro Pasquali",
      ],
      references: [
        "https://nodejs.org/en/docs/",
        "https://www.digitalocean.com/community/tutorials/how-to-optimize-node-js-performance",
      ],
    },
    {
      id: 7,
      title: "Cloud Computing Trends 2025",
      image: "/Assets/Cloud_Computing_Trends_2025.jpeg",
      author: "Sophia Miller",
      description: "Insights into the future of cloud technology.",
      content:
        "With advancements in edge computing, serverless architectures, and multi-cloud strategies, cloud computing is set to revolutionize how organizations deploy applications. This article explores the upcoming trends and what businesses can expect in the rapidly evolving cloud landscape.",
      video: "https://www.youtube.com/watch?v=_DSwNHoEJ08",
      books: [
        "Cloud Computing: Concepts, Technology & Architecture by Thomas Erl",
        "Architecting the Cloud by Michael J. Kavis",
      ],
      references: [
        "https://www.ibm.com/cloud/learn/cloud-computing",
        "https://www.forbes.com/sites/forbestechcouncil/",
      ],
    },
    {
      id: 8,
      title: "Introduction to Next.js",
      image: "/Assets/Introduction_to_Nextjs.jpeg",
      author: "David Lee",
      description: "Next.js: The future of React applications.",
      content:
        "Next.js provides unparalleled flexibility for building server-side rendered applications. This introduction explains its powerful features, including static site generation, API routes, and automatic code splitting, and why it's become a popular framework for performance-driven React developers.",
      video: "https://www.youtube.com/watch?v=Sklc_fQBmcs",
      books: [
        "Learning Next.js by Vercel (Docs)",
        "Mastering Next.js by Packt Publishing",
      ],
      references: [
        "https://nextjs.org/docs",
        "https://css-tricks.com/nextjs-tutorial-build-static-website/",
      ],
    },
    {
      id: 9,
      title: "Scaling Databases Effectively",
      image: "/Assets/Scaling_Databases_Effectively.jpeg",
      author: "Laura Adams",
      description: "Best practices for scaling databases.",
      content:
        "Scaling databases is critical to maintaining performance as user demands grow. This guide explores effective strategies for vertical and horizontal scaling, database replication, partitioning, and performance optimization. It covers both SQL and NoSQL databases.",
      video: "https://www.youtube.com/watch?v=JXXZjdua3JE",
      books: [
        "High Performance MySQL by Baron Schwartz, Peter Zaitsev, and Vadim Tkachenko",
        "Designing Data-Intensive Applications by Martin Kleppmann",
      ],
      references: [
        "https://www.mongodb.com/blog/post/scaling-mongodb",
        "https://www.postgresql.org/docs/current/scaling.html",
      ],
    },
  ];

  // Find the blog by ID
  useEffect(() => {
    const blogId = parseInt(id);
    if (!isNaN(blogId)) {
      const selectedBlog = blogs.find((b) => b.id === blogId);
      setBlog(selectedBlog || null);
    } else {
      setBlog(null);
    }
  }, [id]);

  // Return if the blog is not found
  if (!blog) return <p className="text-center text-gray-600 mt-10">Blog not found</p>;

  // Render the blog details
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{blog.title}</h1>
        <p className="text-gray-600 text-sm">By {blog.author}</p>
        <img
          src={blog.image}
          alt={blog.title}
          onError={(e) => {
            e.target.src = "/Assets/default-image.jpeg"; // Ensure this file exists in public/Assets/
          }}
          className="my-4 rounded-lg w-full max-h-96 object-cover"
        />
        <p className="text-lg text-gray-700 leading-relaxed">{blog.content}</p>
        {/* Video Section */}
        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-gray-800">Related Video:</h3>
          <a
            href={blog.video}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Watch Video
          </a>
        </div>
        {/* Recommended Books */}
        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-gray-800">Recommended Books:</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {blog.books.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>
        {/* References */}
        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-gray-800">References:</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {blog.references.map((reference, index) => (
              <li key={index}>
                <a
                  href={reference}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {reference}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;