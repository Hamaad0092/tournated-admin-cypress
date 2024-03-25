// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   projectId: 'your_project_id_here',
//   e2e: {
//     setupNodeEvents(on, config) {
//       // Implement node event listeners here
//       on("task", {
//         // Define custom tasks here
//         // Example task:
//         // myCustomTask(data) {
//         //   console.log("Received data:", data);
//         //   return null; // Task completion
//         // }
//       });
//     },
//   },
// });
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  projectId: "1f5byj",


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
