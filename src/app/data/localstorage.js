import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {
  constructor(customParser) {
    this.parser = customParser;
  }

  _parsePath(providedPath) {
    const URL_ROUTE_DELIMITER = '/';
    const parts = providedPath.split(URL_ROUTE_DELIMITER);
    return { path: parts[0], id: parts[1] };
  }
  async add(data) {
    throw new Error(
      'Not implemented for LocalStorage database type.  Use `save` instead.'
    );
  }

  async remove(id) {
    try {
      const result = await AsyncStorage.removeItem(id);
      if (this.parser.removeParse) {
        return this.parser.removeParse(result, arguments);
      } else {
        return result;
      }
    } catch (e) {
      console.log('Error deleting data');
    }
  }

  async get(path, id) {
    try {
      const value = await AsyncStorage.getItem(path);

      if (this.parser.getParse) {
        return this.parser.getParse(value, arguments);
      } else {
        const jsonData = JSON.parse(value);

        return jsonData[id];
      }
    } catch (e) {
      console.log('Error getting data');
    }
  }

  async list(path) {
    try {
      const value = await AsyncStorage.getItem(path);
      if (this.parser.listParse) {
        return this.parser.listParse(value, arguments);
      } else {
        return value != null ? JSON.parse(value) : null;
      }
    } catch (e) {
      console.log('Error getting all data', e);
    }
  }

  /**
   * Saves data to local storage.  If nested data is NOT found, data in the path will be overwritten with provided data.
   * path - String - Saves data to the path. Follow a `path/id` format to nest data one level deep.
   * data - Object - The data to save to the path
   */
  async save(path, data) {
    try {
      const deconstructed = this._parsePath(path);
      let dataToOverwrite = data;

      if (deconstructed.id) {
        const savedItemsAtPath = await AsyncStorage.getItem(deconstructed.path);
        dataToOverwrite = savedItemsAtPath ? JSON.parse(savedItemsAtPath) : {};
        dataToOverwrite[deconstructed.id] = data;
      }
      const result = await AsyncStorage.setItem(
        deconstructed.path,
        JSON.stringify(dataToOverwrite)
      );

      if (this.parser.saveParse) {
        return this.parser.saveParse(result, arguments);
      } else {
        return result;
      }
    } catch (e) {
      console.log('Error saving data', e);
    }
  }
}

export default LocalStorage;
