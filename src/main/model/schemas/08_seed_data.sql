/**
 * Populate workout types table
 */

 INSERT INTO workout_types (name, category) VALUES
    ('Indoor Run', 'Cardio'),
    ('Indoor Walk', 'Cardio'),
    ('Outdoor Walk', 'Cardio'),
    ('Traditional Strength Training', 'Strength Training'),
    ('Core Training', 'Strength Training'),
    ('Yoga', 'Flexibility'),
    ('Stretch', 'Flexibility'),
    ('Pool Swim', 'Cardio'),
    ('High Intensity Interval Training', 'Cardio'),
    ('Functional Strength Training', 'Strength Training'),
    ('Cool Down', 'Flexibility')
    ;


/**
 * Populate workout types metrics table
 */

-- Indoor Run
INSERT INTO workout_types_metrics (type_id, metric_name, metric_unit)
SELECT type_id, unnest(ARRAY['Distance', 'Calories']), unnest(ARRAY['mi', 'kcal'])
FROM workout_types WHERE name = 'Indoor Run';

-- Indoor Walk
INSERT INTO workout_types_metrics (type_id, metric_name, metric_unit)
SELECT type_id, unnest(ARRAY['Distance', 'Calories']), unnest(ARRAY['mi', 'kcal'])
FROM workout_types WHERE name = 'Indoor Walk';

-- Outdoor Walk
INSERT INTO workout_types_metrics (type_id, metric_name, metric_unit)
SELECT type_id, unnest(ARRAY['Distance', 'Calories']), unnest(ARRAY['mi', 'kcal'])
FROM workout_types WHERE name = 'Outdoor Walk';

-- Traditional Strength Training
INSERT INTO workout_types_metrics (type_id, metric_name, metric_unit)
SELECT type_id, unnest(ARRAY['Weight', 'Reps', 'Sets']), unnest(ARRAY['lbs', 'count', 'count'])
FROM workout_types WHERE name = 'Traditional Strength Training';

-- Core Training
INSERT INTO workout_types_metrics (type_id, metric_name, metric_unit)
SELECT type_id, 'Calories', 'kcal'
FROM workout_types WHERE name = 'Core Training';

-- Yoga
INSERT INTO workout_types_metrics (type_id, metric_name, metric_unit)
SELECT type_id, 'Calories', 'kcal'
FROM workout_types WHERE name = 'Yoga';

-- Pool Swim
INSERT INTO workout_types_metrics (type_id, metric_name, metric_unit)
SELECT type_id, unnest(ARRAY['Distance', 'Calories']), unnest(ARRAY['m', 'kcal'])
FROM workout_types WHERE name = 'Pool Swim';

-- High Intensity Interval Training
INSERT INTO workout_types_metrics (type_id, metric_name, metric_unit)
SELECT type_id, 'Calories', 'kcal'
FROM workout_types WHERE name = 'High Intensity Interval Training';

-- Functional Strength Training
INSERT INTO workout_types_metrics (type_id, metric_name, metric_unit)
SELECT type_id, 'Calories', 'kcal'
FROM workout_types WHERE name = 'Functional Strength Training';
