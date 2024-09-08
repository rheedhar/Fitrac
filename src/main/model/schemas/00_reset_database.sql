/**
 * Script to reset database
 */

 -- Drop all tables if they exist
 DROP TABLE IF EXISTS workout_metric_values;
 DROP TABLE IF EXISTS workout_type_metrics;
 DROP TABLE IF EXISTS workouts;
 DROP TABLE IF EXISTS workout_types;
 DROP TABLE IF EXISTS goals;
 DROP TABLE IF EXISTS users;

 -- Drop custom types
 DROP TYPE IF EXISTS gender_type;
 DROP TYPE IF EXISTS account_status_type;
 DROP TYPE IF EXISTS weight_unit_type;
 DROP TYPE IF EXISTS height_unit_type;
 DROP TYPE IF EXISTS goal_category_type;
 DROP TYPE IF EXISTS goal_status_type;

 -- Drop functions
 DROP FUNCTION IF EXISTS update_updated_at();
 DROP FUNCTION IF EXISTS add_workout_metrics(TEXT, TEXT[][]);
