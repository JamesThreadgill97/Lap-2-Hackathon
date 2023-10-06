DROP TABLE IF EXISTS diary;
CREATE TABLE diary (
    diary_id INT GENERATED ALWAYS AS IDENTITY,
    date INT  NOT NULL,
    time INT,
    text VARCHAR(100) NOT NULL,
    category VARCHAR(10) NOT NULL,
    PRIMARY KEY (diary_id)
);
INSERT INTO diary (date, time, text, category)
VALUES
    ('12/01/1989', '12:59', 'Plane to Athens', 'Travel');
