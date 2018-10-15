# Todo List API RoR

## General Info

- Ruby version: 2.5.1

- Database: Postgresql

- Ruby on Rails version: 5.2.1

## Project Setup

Install homebrew:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Now install rbenv and Ruby 2.5.1

```
brew install rbenv ruby-build
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile
rbenv install 2.5.1
rbenv global 2.5.1
ruby -v
```

Now install rails gem:

```
gem install rails -v 5.2.0
rbenv rehash
```

Install Postgresql:

```
brew install postgresql

This next is to run postgresql at login:
brew services start postgresql
```

## Run project

On project root install project dependencies:

```
bundle install
```

Now create, migrate DB and create seeds:

```
rails db:create
rails db:migrate
rails db:seed
```

Run your project in localhost:3000 :

```
rails s
```
