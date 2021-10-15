// import { AsyncStorage } from '@react-native-async-storage/async-storage';

// class LocalStorage {
//   constructor(customParser) {
//     this.parser = customParser;

//     this.add = add;
//     this.remove = remove;
//     this.get = get;
//     this.list = list;
//   }
//   async add(data) {
//     throw new Error(
//       'Not implemented for LocalStorage database type.  Use `save` instead.'
//     );
//   }

//   async remove(id) {
//     try {
//       const result = await AsyncStorage.removeItem(id);
//       if (this.parser.removeParse) {
//         return this.parser.removeParse(result, arguments);
//       } else {
//         return result;
//       }
//     } catch (e) {
//       console.log('Error deleting data');
//     }
//   }

//   async get(id) {
//     try {
//       const value = await AsyncStorage.getItem(id);

//       if (this.parser.getParse) {
//         return this.parser.getParse(value, arguments);
//       } else {
//         return value != null ? JSON.parse(value) : null;
//       }
//     } catch (e) {
//       console.log('Error getting data');
//     }
//   }

//   async list() {
//     try {
//       const value = await AsyncStorage.getItem();
//       if (this.parser.listParse) {
//         return this.parser.listParse(value, arguments);
//       } else {
//         return value != null ? JSON.parse(value) : null;
//       }
//     } catch (e) {
//       console.log('Error getting data');
//     }
//   }

//   async save(id, data) {
//     try {
//       const result = await AsyncStorage.setItem(id, data);

//       if (this.parser.saveParse) {
//         return this.parser.saveParse(result, arguments);
//       } else {
//         return result;
//       }
//     } catch (e) {
//       console.log('Error saving data');
//     }
//   }
// }

// export default LocalStorage;
