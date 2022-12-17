FROM node:18

# Clone the GitHub repository
RUN git clone https://github.com/0x464e/comp-se-200

# Change to the project directory
WORKDIR /comp-se-200

# Install dependencies
RUN npm install

# Run coverage with the npm script "test-cov"
RUN npm run test-cov
