import Joi from 'joi';

// siren: Configuration for the watcher saved object.
const WatchConfiguration = {
  type: 'sentinl-watcher',
  title: 'watcher_title',
  schema: Joi.object().keys({
    title: Joi.string(),
    input: Joi.any(),
    actions: Joi.any(),
    transform: Joi.any(),
    condition: Joi.any(),
    report: Joi.boolean(),
    disable: Joi.boolean(),
    save_payload: Joi.boolean(),
    trigger: Joi.any(),
    wizard: Joi.object(),
  })
};

export default WatchConfiguration;
