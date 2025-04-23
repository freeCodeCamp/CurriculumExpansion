import re

medical_records = [
    {
        "patient_id": "P1001",
        "age": 34,
        "gender": "Female",
        "diagnosis": "Hypertension",
        "medications": ["Lisinopril"],
        "last_visit_id": "V2301",
    },
    {
        "patient_id": "P1002",
        "age": 47,
        "gender": "Male",
        "diagnosis": "Type 2 Diabetes",
        "medications": ["Metformin", "Insulin"],
        "last_visit_id": "V2302",
    },
    {
        "patient_id": "P1003",
        "age": 29,
        "gender": "Female",
        "diagnosis": "Asthma",
        "medications": ["Albuterol"],
        "last_visit_id": "V2303",
    },
    {
        "patient_id": "P1004",
        "age": 56,
        "gender": "Male",
        "diagnosis": "Chronic Back Pain",
        "medications": ["Ibuprofen", "Physical Therapy"],
        "last_visit_id": "V2304",
    },
]


def check_values(patient_id, age, gender, diagnosis, medications, last_visit_id):

    constraints = {
        "patient_id": isinstance(patient_id, str) and re.fullmatch(r"P\d+", patient_id),
        "age": isinstance(age, int) and age >= 18,
        "gender": isinstance(gender, str) and gender.lower() in ("male", "female"),
        "diagnosis": isinstance(diagnosis, str) or diagnosis is None,
        "medications": isinstance(medications, list)
        and all(isinstance(i, str) for i in medications),
        "last_visit_id": isinstance(last_visit_id, str)
        and re.fullmatch(r"V\d+", last_visit_id),
    }

    return {key: value for key, value in constraints.items() if not value}


def validate(data):
    is_list_of_dicts = isinstance(data, list) and all(isinstance(i, dict) for i in data)

    if not is_list_of_dicts:
        return "Invalid format: expected a list of dictionaries."

    key_set = set(
        ["patient_id", "age", "gender", "diagnosis", "medications", "last_visit_id"]
    )

    for index, dictionary in enumerate(data):
        if set(dictionary.keys()) != key_set:
            print(
                f"Invalid format: {dictionary} at position {index} has missing and/or invalid keys."
            )
            return False
        invalid_records = check_values(**dictionary)
        for key in invalid_records.keys():
            print(
                f"Unexpected format '{key}: {dictionary.get(key)}' at position {index}."
            )
            return False

    print("Valid format.")
    return True


validate(medical_records)
