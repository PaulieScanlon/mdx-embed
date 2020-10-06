const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
});

window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

window.addIntersectionObserver = () => {
  window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
};

window.triggerGeneralObserver = () => {
  window.IntersectionObserver.mock.calls[0][0]([{ intersectionRatio: 1 }]);
};
