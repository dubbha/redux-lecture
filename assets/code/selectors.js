// Direct lookup
const selectEntities = state => state.entities

// Derive values
const selectItemIds = state => state.items.map(item => item.id)

// Encapsulating a deep lookup
const selectSomeSpecificField = state => state.some.deeply.nested.field;
