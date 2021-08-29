import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }


  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }


  async store(storageKey: string, value: any){
    const encryptedValue = btoa(escape(JSON.stringify(value)));

    await this._storage.set(storageKey,encryptedValue);

  }

  async get(storageKey: string) {
// console.log('storage data: ');
//     console.log(storageKey);

    const ret = await this._storage.get(storageKey );

    // console.log('storage data: ');
    // console.log(ret);
   return (ret == null || ret == '') ? '': JSON.parse(unescape(atob(ret)));
  }

  async removeStorageItem(storageKey: string) {
    await this._storage.remove(storageKey );
  }

  // Clear storage
  async clear() {
    await this._storage.clear();
  }

}
