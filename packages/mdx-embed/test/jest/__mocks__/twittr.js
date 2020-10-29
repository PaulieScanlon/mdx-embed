const addTwttr = () => ({
  widgets: {
    load: jest.fn(),
  },
});

window.twttr = addTwttr();
// jest.fn().mockImplementation(addTwttr);
