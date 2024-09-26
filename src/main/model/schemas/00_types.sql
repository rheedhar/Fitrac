/**
 * Define types for columns
 */

CREATE TYPE gender_type AS ENUM ('Male', 'Female', 'Other');
CREATE TYPE account_status_type AS ENUM ('Activated', 'Deactivated');
CREATE TYPE weight_unit_type AS ENUM ('LBS', 'KG');
CREATE TYPE height_unit_type AS ENUM ('IN', 'CM');
CREATE TYPE goal_status_type as ENUM ('In Progress', 'Completed', 'Not Completed');
CREATE TYPE goal_category_type AS ENUM ('Cardio', 'Strength Training', 'Flexibility');

