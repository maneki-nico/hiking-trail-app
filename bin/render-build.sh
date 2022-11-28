#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
yarn install

echo $DATABASE_URL
bundle exec rails runner 'puts ActiveRecord::Base.configurations'
bundle exec rails runner 'puts ActiveRecord::Base.configurations.inspect'

bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:drop
bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed