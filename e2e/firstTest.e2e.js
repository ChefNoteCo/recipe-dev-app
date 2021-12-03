describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a recipe list', async () => {
    await expect(element(by.id('recipeListPage'))).toBeVisible();
  });
});
