const { reloadApp } = require('detox-expo-helpers');

jest.setTimeout(120000);
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await reloadApp();
  });

  it('should have a recipe list', async () => {
    await expect(element(by.id('recipeListPage'))).toBeVisible();
  });
});
