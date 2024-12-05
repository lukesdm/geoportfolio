FROM ruby:2.7

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Install Bundler
RUN gem install bundler

# Copy Gemfile and install gems
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copy project files
COPY . .

# Expose Jekyll server port
EXPOSE 4000

# Command to serve Jekyll site
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]