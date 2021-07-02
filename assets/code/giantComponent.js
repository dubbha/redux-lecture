import React, { Component } from 'react';

class Giant extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      isFriendOnline: false,
      ...
    };

    this.subscribeToStore = this.subscribeToStore.bind(this);
    this.unsubscribeFromStore = this.unsubscribeFromStore.bind(this);
    this.fetchFriendStatus = this.fetchFriendStatus.bind(this);
    this.cancelPendingUpdates = this.cancelPendingUpdates.bind(this);
    this.startTimers = this.startTimers.bind(this);
    this.stopTimers = this.stopTimers.bind(this);
  }

  componentDidMount() {
    this.subscribeToStore(this.props.friend.id);
    this.fetchFriendStatus(this.props.friend.id);
    this.startTimers();
  }

  componentWillUnmount() {
    this.unsubscribeFromStore(this.props.friend.id);
    this.cancelPendingUpdates();
    this.stopTimers();
  }

  componentDidUpdate(prevProps) {
    if (this.props.friend.id !== prevProps.friend.id) {
      ...
    }
  }

  subscribeToStore() { ... }
  unsubscribeFromStore() { ... }
  fetchFriendStatus() { ... }
  cancelPendingUpdates() { ... }
  startTimers() { ... }
  stopTimers() { ... }

  render() { ... }
}
