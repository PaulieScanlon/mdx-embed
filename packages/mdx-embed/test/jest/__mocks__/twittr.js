const addTwttr = () => ({
  widgets: {
    load: () => null,
  },
});

window.twttr = jest.fn().mockImplementation(addTwttr);
