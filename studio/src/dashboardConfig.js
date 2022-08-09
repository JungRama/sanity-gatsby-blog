export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62f1c2eeea18ae4c68082aa1",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-iiiqkhpe",
                  apiId: "a39997bd-9391-486f-9894-b6bde812c462",
                },
                {
                  buildHookId: "62f1c2eebe1e784de3eb2a21",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-gq6rw4vr",
                  apiId: "b2680fd4-f519-47c1-b3a0-5ab1a989acae",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/JungRama/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-gq6rw4vr.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
