class OfflineCreatures {
    static creatureDb(type) {
        return idb.open(type+'-store', 2, upgradeDB => {
            switch (upgradeDB.oldVersion) {
                case 0: upgradeDB.createObjectStore(type)
            }
        })
    }
    
    static getCreature(type, id) {
        return OfflineCreatures.creatureDb(type).then(db => {
            return db.transaction(type)
                .objectStore(type).get(id);
        })
    }
    
    static putCreature(type, value, key) {
        return OfflineCreatures.creatureDb(type).then(db => {
            const tx = db.transaction(type, 'readwrite');
            tx.objectStore(type).put(value, key);
            return tx.complete;
        });
    }
    
    static deleteCreature(type, id) {
        return OfflineCreatures.creatureDb(type).then(db => {
            const tx = db.transaction(type, 'readwrite');
            tx.objectStore(type).delete(id);
            return tx.complete;
        });
    }
    
    static clearCreature(type) {
        return OfflineCreatures.creatureDb(type).then(db => {
            const tx = db.transaction(type, 'readwrite');
            tx.objectStore(type).clear();
            return tx.complete;
        });
    }
    
    static getAllCreatures(type) {
        return OfflineCreatures.creatureDb(type).then(db => {
            return db.transaction(type)
                .objectStore(type).getAll();
        })
    }

}

