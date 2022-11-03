require 'rails_helper'

feature 'user views a user profile', %Q{
  As a user
  I want to view my profile page as well as others'
  So I can get more information about each user
} do
  scenario 'navigate to and view a user profile page' do
    visit api_v1_user_path

    expect(page).to have_content('Joined')
    expect(page).to have_content('Reviews by')
  end

  scenario 'navigate to and view own profile page' do
    user = FactoryBot.create(:user)
    visit new_user_session_path

    fill_in 'Username', with: user.username
    fill_in 'Password', with: user.password

    click_button 'Log in'

    click_link 'View My Profile'

    expect(page).to have_content(user.username)
  end
end