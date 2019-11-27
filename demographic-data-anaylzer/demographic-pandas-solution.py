import pandas as pd

# Read data from file
data = pd.read_csv('adult.data.csv')

# How many of each race (race feature) are represented in this dataset?
race_count = data['race'].value_counts()

# What is the average age (age feature) of men?
average_age_men = data.loc[data['sex'] == 'Male', 'age'].mean()

# What is the percentage of United States citizens (native-country feature)?
percentage_US = float(((data['native-country'] == 'United-States').sum()) / data.shape[0])*100

# What are mean value and standard deviation of the age of those who recieve more than 50K per year (salary feature) and those who receive less than 50K per year?

ages_high = data.loc[data['salary'] == '>50K', 'age']
ages_low = data.loc[data['salary'] == '<=50K', 'age']

ages_high_mean = ages_high.mean()
ages_low_mean = ages_low.mean()

ages_high_std = ages_high.std()
ages_low_std = ages_low.std()

# What is the minumum number of hours a person works per week (hours-per-week feature)?
# What percentage of the people that work the minumum number of hours per week have a salary of >50K?
min_work = data['hours-per-week'].min()

num_min_workers = data[data['hours-per-week'] == min_work].shape[0]

rich_percentage = (float(data[(data['hours-per-week'] == min_work)
                 & (data['salary'] == '>50K')].shape[0]) / num_min_workers) * 100

# Identify the top occupation for those who earn a little and a lot (salary) for each country (native-country).

top_occupations_by_country = []

for (country, salary), sub_df in data.groupby(['native-country', 'salary']):
    top_occupations_by_country.append(f"{country} {salary} {sub_df['occupation'].value_counts().keys()[0]}")

# DO NOT MODIFY BELOW THIS LINE

print("Number of each race:\n", race_count)

print("Average age of men:", average_age_men)

print("Percentage United States citizens:", percentage_US)

print(f"The average age of salary >50K: {round(ages_high_mean, 1)} +- {round(ages_high_std, 1)} years")
print(f"The average age of salary <=50K: {round(ages_low_mean, 1)} +- {round(ages_low_std, 1)} years")

print(f"Min work time: {min_work} hours/week")

print("Percentage of rich among them {0}%".format(rich_percentage))

print("Top occupations by country:", *top_occupations_by_country, sep = "\n")