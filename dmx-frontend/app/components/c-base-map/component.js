import Ember from 'ember';

const {get,set} = Ember;

export default Ember.Component.extend({
  localClassNames: 'map',
  selectedLightInfos: Ember.computed('selectedIds.[]', 'lightInfos.@each.id', {
    get() {
      return get(this, 'lightInfos')
        .filter(li => get(this, 'selectedIds').includes(get(li, 'id')));
    }
  }),
  actions: {
    selectColor(color) {
      let lights = get(this, 'selectedLightInfos');
      if(!lights || !get(lights, 'length')) {
        lights = get(this, 'lightInfos');
      }

      lights.map(li => get(li, 'status')).forEach(ls => {
        set(ls, 'rgbColor', color);
        debugger;
        ls.save();
      });
    }
  }
});
