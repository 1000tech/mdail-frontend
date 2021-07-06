const localeEn = {
  emptyState: 'No %{phrase} found',
  look: {
    count: '%{smart_count} Look |||| %{smart_count} Looks',
  },
  comment: {
    count: 'See More Comment (%{smart_count}) |||| See More Comments (%{smart_count})',
    new: 'Add a commment',
    publish: 'Publish',
  },
  profile: {
    follower: '%{smart_count} Follower |||| %{smart_count} Followers',
    following: '%{smart_count} Following |||| %{smart_count} Followings',
  },
  validation: {
    email: 'Please provide a valid email.',
    password: 'Invalid password format. Supported characters: a-z, A-Z, 0-9, *, &, ?, @, !, $, %, #, -, ".". No spaces allowed.',
    passwordMin: 'Password should have at least 8 characters.',
    passwordMax: ' This value is too long. It should have 100 characters or less.',
    name: 'Please enter valid name.',
    nameMin: 'Oops! Your name should be longer than 3. Minimum are 3 characters.',
    nameMax: 'Oops! Your name should be shorter than 30. Maximum are 30 characters.',
    age: 'Please enter valid age.',
    required: 'This field is required.',
  },
};

export default localeEn;
