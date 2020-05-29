import Transform from '@ember-data/serializer/transform';

export default class DollarTransform extends Transform {
  deserialize(serialized) {
    return (parseInt(serialized, 10) / 100).toFixed(2);
  }

  serialize(deserialized) {
    return parseInt(deserialized * 100, 10);
  }
}
