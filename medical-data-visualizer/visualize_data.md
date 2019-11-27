# Medical Data Visualizer

#### Problem

In this project, you will visualize and make calculations from medical examination data matplotlib, seaborn, and pandas. The dataset values were collected during medical examinations.

#### Data description

File name: medical_examination.csv

There are 3 types of input features:

- *Objective*: factual information;
- *Examination*: results of medical examination;
- *Subjective*: information given by the patient.

| Feature | Variable Type | Variable      | Value Type |
|---------|--------------|---------------|------------|
| Age | Objective Feature | age | int (days) |
| Height | Objective Feature | height | int (cm) |
| Weight | Objective Feature | weight | float (kg) |
| Gender | Objective Feature | gender | categorical code |
| Systolic blood pressure | Examination Feature | ap_hi | int |
| Diastolic blood pressure | Examination Feature | ap_lo | int |
| Cholesterol | Examination Feature | cholesterol | 1: normal, 2: above normal, 3: well above normal |
| Glucose | Examination Feature | gluc | 1: normal, 2: above normal, 3: well above normal |
| Smoking | Subjective Feature | smoke | binary |
| Alcohol intake | Subjective Feature | alco | binary |
| Physical activity | Subjective Feature | active | binary |
| Presence or absence of cardiovascular disease | Target Variable | cardio | binary |

#### Tasks

Use the data to complete the following tasks:
* Convert the data into long format and create a chart that shows the value counts of the categorical features using seaborn's `factorplot()`. The dataset should be split by 'Cardio' so there is one chart for each 'cardio' value. The chart should look like "Figure_1.png".
* Create a new feature called BMI. To get the BMI, divide the weight in kilogramms by the square of the height in meters.
* Clean the data. Filter out the following patient segments that represent incorrect data:
  - diastilic pressure is higher then systolic (`df['ap_lo'] <= df['ap_hi'])`)
  - height is strictly less than 2.5% percentile (`(df['height'] >= df['height'].quantile(0.025))`)
  - height is strictly more than 97.5% percentile
  - weight is strictly less then 2.5% percentile
  - weight is strictly more than 97.5% percentile
* Create a matrix of the correlation coefficients between the features using the filtered dataset. Plot the correlation matrix using seaborn's `heatmap()`. The chart should look like "Figure_2.png".

# Starter Code
```py
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

# Use numpy to import 'medical_examination.csv'
df = None

# Convert the data into long format using Panda's "melt()" method. Set value_vars to 'gender','cholesterol', 'gluc', 'smoke', 'alco', 'active'. Set id_vars to 'cardio'. 
df_uniques = None

# Set df_uniques again to be a DataFrame. Make sure to group, sort, and rename apporopriately to look like "Figure_1.png".
df_uniques = None

# Create a bar graph using seaborn's "catplot()". Make sure to pass in values for the following arguments: x, y, hue, col, data, kind.


# Create a new feature called BMI. To get the BMI, divide the weight in kilogramms by the square of the height in meters.

df['BMI'] = df['weight'] / (df['height'] / 100) ** 2

# Clean and filter the data:
filtered_df = None

# Calculate the correlation matrix


#Set the subplots figsize to (12, 9)


# Create a heatmap using seaborn.


# Show the graphs

```

# Solution Code
```py
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv('medical_examination.csv')

df_uniques = pd.melt(frame=df, value_vars=['gender','cholesterol', 
                                           'gluc', 'smoke', 'alco', 
                                           'active'], 
                     id_vars=['cardio'])
df_uniques = pd.DataFrame(df_uniques.groupby(['variable', 'value', 
                                              'cardio'])['value'].count()) \
    .sort_index(level=[0, 1]) \
    .rename(columns={'value': 'count'}) \
    .reset_index()

sns.catplot(x='variable', y='count', hue='value', 
               col='cardio', data=df_uniques, kind='bar');


df['BMI'] = df['weight'] / (df['height'] / 100) ** 2

filtered_df = df[(df['ap_lo'] <= df['ap_hi']) & 
                 (df['height'] >= df['height'].quantile(0.025)) &
                 (df['height'] <= df['height'].quantile(0.975)) &
                 (df['weight'] >= df['weight'].quantile(0.025)) & 
                 (df['weight'] <= df['weight'].quantile(0.975))]

# Calculate the correlation matrix
corr = filtered_df.corr(method='pearson')
plt.subplots(figsize=(12, 9))
sns.heatmap(corr, annot=True, fmt='.1f', square=True)

plt.show()
```