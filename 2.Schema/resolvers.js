export const resolvers = {
  Query: {
    jobs() {
      return [
        {
          id: 1,
          title: "Node Develolper",
          description: "Node and bun developer",
        },
        {
          id: 1,
          title: "React Develolper",
          description: "Node and bun developer",
        },
      ];
    },
  },
};
