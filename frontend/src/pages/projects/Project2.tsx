import MainLayout from '../../layout/MainLayout'
import { 
  CodeBracketIcon, 
  DocumentTextIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'

export default function Project2() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        {/* Hero Section */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Movie Box Office Prediction
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                A system for predicting movie box office performance using machine learning and MongoDB. Supports data analysis, and feature usage analytics.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Python
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  MongoDB
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Machine Learning
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  Data Analysis
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  Jupyter Notebook
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Overview */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  <DocumentTextIcon className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    This project demonstrates the end-to-end process of building a movie box office prediction system, focusing on data engineering, system design, and machine learning workflow. The project covers multi-source data integration, automated cleaning, flexible NoSQL database design, feature engineering, model selection, and comprehensive data analysis.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Core Features</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Data preprocessing and feature engineering</li>
                        <li>• User and feature usage analytics</li>
                        <li>• Interactive data analysis and visualization</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Technical Highlights</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Data cleaning & feature engineering</li>
                        <li>• Scalable MongoDB NoSQL schema</li>
                        <li>• Hyperparameter tuning & evaluation</li>
                        <li>• Interactive EDA in Jupyter Notebook</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              

              {/* Core Code */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  <CodeBracketIcon className="h-6 w-6 text-purple-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Core Code</h2>
                </div>
                <div className="space-y-6 text-gray-700">
                  {/* 1. Data Preprocessing */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">1. Data Preprocessing</h4>
                    <ul className="list-disc pl-6">
                      <li>Missing value imputation and outlier handling</li>
                      <li>Type conversion (e.g., budget to integer, IMDb score to float)</li>
                      <li>Data normalization and log transformation for skewed features</li>
                    </ul>
                    <pre className="bg-gray-100 rounded p-2 mt-2 text-xs overflow-x-auto max-h-40 overflow-y-auto">
{
`missing_data = df.isnull().sum()
print(missing_data)

df['Budget'] = df['Budget'].fillna(df['Budget'].median())
df['Box Office'] = df['Box Office'].fillna(df['Box Office'].median())
df['Earnings'] = df['Earnings'].fillna(df['Earnings'].median())
df['Oscar and Golden Globes nominations'] = df['Oscar and Golden Globes nominations'].fillna(df['Oscar and Golden Globes nominations'].mode()[0])
df['Oscar and Golden Globes awards'] = df['Oscar and Golden Globes awards'].fillna(df['Oscar and Golden Globes awards'].mode()[0])

# Drop rows with missing values for categorical columns if necessary
df = df.dropna(subset=['Director', 'Genre', 'Actor 1', 'Actor 2', 'Actor 3', 'Release year', 'IMDb score'])

# Check for duplicates
duplicates = df.duplicated().sum()
print(f"Number of duplicate rows: {duplicates}")

# Remove duplicates
df = df.drop_duplicates()

# Get the numerical columns (excluding non-numeric columns)
numerical_columns = df.select_dtypes(include=['float64', 'int64']).columns

# Loop through each numerical column and remove outliers
for col in numerical_columns:
    Q1 = df[col].quantile(0.25)  # First quartile (25th percentile)
    Q3 = df[col].quantile(0.75)  # Third quartile (75th percentile)
    IQR = Q3 - Q1  # Interquartile range
    
    # Define the lower and upper bounds for outliers
    lower_bound = Q1 - 1.5 * IQR
    upper_bound = Q3 + 1.5 * IQR
    
    # Filter rows to keep only those within the bounds
    df = df[(df[col] >= lower_bound) & (df[col] <= upper_bound)]

# Check the shape of the dataframe after removing outliers
print(f"Shape of the DataFrame after removing outliers: {df.shape}")

#Convert Data Types
df['Release year'] = df['Release year'].astype(int)
df['IMDb score'] = df['IMDb score'].astype(float)
`
}
                    </pre>
                  </div>
                  {/* 2. Feature Engineering */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">2. Feature Engineering</h4>
                    <ul className="list-disc pl-6">
                      <li>Created new features (e.g., director/actor box office percentage)</li>
                      <li>One-hot encoding for categorical variables (genre, etc.)</li>
                      <li>Feature selection based on importance analysis</li>
                    </ul>
                    <pre className="bg-gray-100 rounded p-2 mt-2 text-xs overflow-x-auto max-h-40 overflow-y-auto">
{
`
# Apply log transformation to budget and final box office
df['log_budget'] = np.log1p(df['Budget'])
df['log_final_box_office'] = np.log1p(df['Box Office'])

# Feature columns, including log-transformed budget, genres, director, and actors
features = ['Running time', 'log_budget', 'Actors Box Office %', 
            'Director Box Office %', 'Oscar and Golden Globes nominations', 
            'Release year', 'IMDb score']



# Prepare feature set X and target y
X = df[features]
y = df['log_final_box_office']

# Check the first few rows of the features
print(X.head())

selected_features = feature_importance_df[feature_importance_df['Importance'] > 0.05]['Feature'].tolist()

X_train_selected = X_train[selected_features] 
X_test_selected = X_test[selected_features]    


# Fit the scaler on the selected training data and transform it
X_train_scaled = scaler.fit_transform(X_train_selected)

# Transform the test data using the same scaler
X_test_scaled = scaler.transform(X_test_selected)


rf_model_selected = RandomForestRegressor(n_estimators=100, random_state=42)
rf_model_selected.fit(X_train_scaled, y_train)


y_pred_selected = rf_model_selected.predict(X_test_scaled)

mse_selected = mean_squared_error(y_test, y_pred_selected)
r2_selected = r2_score(y_test, y_pred_selected)

print(f"Mean Squared Error (Selected Features): {mse_selected}")
print(f"R^2 Score (Selected Features): {r2_selected}")

`
}
                    </pre>
                  </div>
                  {/* 3. Model Training & Evaluation */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">3. Model Training & Evaluation</h4>
                    <ul className="list-disc pl-6">
                      <li>Trained multiple regression models (Random Forest, Linear Regression, etc.)</li>
                      <li>Used GridSearchCV for hyperparameter tuning</li>
                      <li>Evaluated models using cross-validation, MSE, and R² score</li>
                    </ul>
                    <pre className="bg-gray-100 rounded p-2 mt-2 text-xs overflow-x-auto max-h-40 overflow-y-auto">
{
`
# Define the hyperparameter grid to be tuned
param_grid = {
    'n_estimators': [50, 100, 150], 
    'max_depth': [None, 10, 20],
    'min_samples_split': [2, 5, 10], 
    'min_samples_leaf': [1, 2, 4], 
    'max_features': ['sqrt', 'log2'], 
}

rf = RandomForestRegressor(random_state=42)

# Perform hyperparameter tuning using GridSearchCV
grid_search = GridSearchCV(estimator=rf, param_grid=param_grid, cv=5, n_jobs=-1, verbose=2, scoring='neg_mean_squared_error')

grid_search.fit(X_train_scaled, y_train)

print("Best Hyperparameters: ", grid_search.best_params_)
print("Best Cross-validation Score: ", grid_search.best_score_)


# best model
best_rf_model = grid_search.best_estimator_

# evluation
y_pred = best_rf_model.predict(X_test_scaled)
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Mean Squared Error (After Hyperparameter Tuning): {mse}")
print(f"R^2 Score (After Hyperparameter Tuning): {r2}")

# Calculate absolute error
absolute_error = np.abs(y_test - y_pred)

# Calculate relative error
relative_error = absolute_error / y_test

# Calculate the number of predictions with less than 10% error
accuracy_90 = np.mean(relative_error < 0.10) * 100  # 90% accuracy

print(f"Accuracy with less than 10% error: {accuracy_90:.2f}%")

# save model
import pickle

# save model
with open('predict_box_office.pkl', 'wb') as f:
    pickle.dump(grid_search.best_estimator_, f)

# save feature columns
with open('feature_columns.pkl', 'wb') as f:
    pickle.dump(selected_features, f)

# save standar
with open('scaler.pkl', 'wb') as f:
    pickle.dump(scaler, f)
`
}
                    </pre>
                  </div>
                  {/* 4. Prediction API & Automation */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">4. Prediction API & Automation</h4>
                    <ul className="list-disc pl-6">
                      <li>Developed a Python API for real-time box office prediction</li>
                      <li>Automated the end-to-end pipeline for data ingestion, training, and prediction</li>
                      <li>Integrated with MongoDB for seamless data flow</li>
                    </ul>
                    <pre className="bg-gray-100 rounded p-2 mt-2 text-xs overflow-x-auto max-h-40 overflow-y-auto">
{
`
def load_model(filename):
    """
    Load a model from a file using pickle.
    
    Args:
    - filename: The path to the file where the model is saved.
    
    Returns:
    - The loaded model.
    """
    try:
        with open(filename, 'rb') as file:
            model = pickle.load(file)
        return model
    except Exception as e:
        return None


def predict_box_office(model, input_scaled):
    """
    Predict the final box office revenue using a trained model.

    Args:
    - model: The trained machine learning model (e.g., RandomForestRegressor).
    - input_scaled (ndarray): The input data that has been standardized for prediction.

    Returns:
    - predicted_final_box_office (float): The predicted final box office revenue (non-log scale).
    """
    # Predict the log-transformed final box office
    prediction = model.predict(input_scaled)
    print(f"Predicted log-transformed Box Office: {prediction}")

    # Reverse the log transformation to get the actual predicted final box office
    predicted_final_box_office = np.expm1(prediction) 

    
    print(f"Predicted final Box Office: {predicted_final_box_office}")

    return predicted_final_box_office
`
}
                    </pre>
                  </div>
                  {/* 5. Interactive EDA & Visualization */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">5. Interactive EDA & Visualization</h4>
                    <ul className="list-disc pl-6">
                      <li>Used Jupyter Notebook for exploratory data analysis and visualization</li>
                      <li>Generated charts for feature distributions, correlations, and model results</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Analyze & Visualization */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Findings & Visualizations</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-4">
                  <li>
                    <b>Distribution of IMDb Scores:</b> The histogram of IMDb scores reveals a slightly left-skewed distribution, with most movies scoring between 6 and 8. This indicates that the majority of movies in the dataset re- ceived moderate to high ratings from viewers. Very few movies fall below a score of 4 or above a score of 9, reflect- ing the general quality distribution of the sample.
                    <div className="w-full flex justify-center my-4">
                      <img src="/portfolio/assets/IMDb_score_dist.jpg" alt="Correlation Heatmap" className="w-full max-w-xl rounded-lg shadow" />
                    </div>
                  </li>
                  <li>
                    <b>Correlation Heatmap:</b> The heatmap visualizes the relationships among key features in the dataset. Budget and box office revenue show the highest correlation (0.71), while IMDb score and director box office share also have moderate positive correlations with revenue. Oscar and Golden Globe nominations have relatively low correlation, indicating limited direct impact on box office performance.
                    <div className="w-full flex justify-center my-4">
                      <img src="/portfolio/assets/heatmap.jpg" alt="Correlation Heatmap" className="w-full max-w-xl rounded-lg shadow" />
                    </div>
                  </li>
                  <li>
                    <b>Actual vs. Predicted Box Office:</b> The scatter plot shows that most predictions closely match the actual box office values, indicating the model captures the underlying patterns well. While most points align with the ideal prediction line, a few outliers exist, but overall the model demonstrates strong predictive ability for the majority of movies.
                    <div className="w-full flex justify-center my-4">
                      <img src="/portfolio/assets/actual_predict_chart.jpg" alt="Budget vs Box Office" className="w-full max-w-xl rounded-lg shadow" />
                    </div>
                  </li>
                  
                  <li>
                    <b>Model Performance:</b> The Random Forest model achieved an R² score of 0.618 and 88.83% of predictions had less than 10% error, demonstrating strong predictive accuracy for industry applications. Feature importance analysis revealed budget (56.2%), director track record (15.9%), and actor influence (10.6%) as the key drivers of box office success, while awards nominations showed minimal impact.
                  </li>
                </ul>
              </div>

              {/* Technical Challenges & Learnings */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  <LightBulbIcon className="h-6 w-6 text-yellow-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Technical Challenges & Learnings</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">Data Integration</h4>
                    <p className="text-sm text-yellow-800">
                      Integrated data from multiple sources (CSV, IMDb) and designed a flexible schema for movie and performance data in MongoDB.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">ML Model Deployment</h4>
                    <p className="text-sm text-blue-800">
                      Built and deployed machine learning models for box office prediction, including feature selection, model evaluation, and API integration. Implemented hyperparameter tuning using GridSearchCV, achieved 88.83% accuracy with less than 10% error, and created automated prediction functions with proper data preprocessing and feature engineering pipelines.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Data Visualization</h4>
                    <p className="text-sm text-green-800">
                      Created comprehensive visualizations including correlation heatmaps, distribution plots, and actual vs. predicted charts to analyze box office trends and model performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Movies in DB</span>
                    <span className="font-semibold text-gray-900">3,000+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">ML Models</span>
                    <span className="font-semibold text-gray-900">Random Forest</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Features</span>
                    <span className="font-semibold text-green-600">Prediction, Analytics</span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Box office prediction</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Data visualization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Flexible database schema</span>
                  </div>
                </div>
              </div>

              {/* Code Links */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Links</h3>
                <div className="space-y-3">
                  <a href="https://github.com/DS5110FinalProject/MovieBoxOfficePrediction" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#181e2a] text-white text-center py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm">
                    GitHub Source
                  </a>
                  <a href="/portfolio/assets/MovieBoxOfficePredictionReport.pdf" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#181e2a] text-white text-center py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm">
                    See PDF Report
                  </a>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border p-6">
                <div className="flex items-center mb-3">
                  <RocketLaunchIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Future Plans</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-2" />
                    <span>Automated data cleaning and feature engineering pipeline</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-2" />
                    <span>Model performance dashboard</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-2" />
                    <span>More data sources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
