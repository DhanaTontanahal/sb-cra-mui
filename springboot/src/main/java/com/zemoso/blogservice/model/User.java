package com.zemoso.blogservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Users")
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long uId;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;

	@Column(name="avatar_link")
	private String avatarLink;
	
	@Column(name="about")
	private String about;
	
	@Column(name="twitter_url")
	private String twitterUrl;
	
	@Column(name="following_count")
	private int followingCount;
	
	@Column(name="followers_count")
	private int followersCount;

	public User(Long uId, String firstName, String lastName, String avatarLink, String about, String twitterUrl,
			int followingCount, int followersCount) {
		super();
		this.uId = uId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.avatarLink = avatarLink;
		this.about = about;
		this.twitterUrl = twitterUrl;
		this.followingCount = followingCount;
		this.followersCount = followersCount;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getuId() {
		return uId;
	}

	public void setuId(Long uId) {
		this.uId = uId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAvatarLink() {
		return avatarLink;
	}

	public void setAvatarLink(String avatarLink) {
		this.avatarLink = avatarLink;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public String getTwitterUrl() {
		return twitterUrl;
	}

	public void setTwitterUrl(String twitterUrl) {
		this.twitterUrl = twitterUrl;
	}

	public int getFollowingCount() {
		return followingCount;
	}

	public void setFollowingCount(int followingCount) {
		this.followingCount = followingCount;
	}

	public int getFollowersCount() {
		return followersCount;
	}

	public void setFollowersCount(int followersCount) {
		this.followersCount = followersCount;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((about == null) ? 0 : about.hashCode());
		result = prime * result + ((avatarLink == null) ? 0 : avatarLink.hashCode());
		result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
		result = prime * result + followersCount;
		result = prime * result + followingCount;
		result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
		result = prime * result + ((twitterUrl == null) ? 0 : twitterUrl.hashCode());
		result = prime * result + ((uId == null) ? 0 : uId.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (about == null) {
			if (other.about != null)
				return false;
		} else if (!about.equals(other.about))
			return false;
		if (avatarLink == null) {
			if (other.avatarLink != null)
				return false;
		} else if (!avatarLink.equals(other.avatarLink))
			return false;
		if (firstName == null) {
			if (other.firstName != null)
				return false;
		} else if (!firstName.equals(other.firstName))
			return false;
		if (followersCount != other.followersCount)
			return false;
		if (followingCount != other.followingCount)
			return false;
		if (lastName == null) {
			if (other.lastName != null)
				return false;
		} else if (!lastName.equals(other.lastName))
			return false;
		if (twitterUrl == null) {
			if (other.twitterUrl != null)
				return false;
		} else if (!twitterUrl.equals(other.twitterUrl))
			return false;
		if (uId == null) {
			if (other.uId != null)
				return false;
		} else if (!uId.equals(other.uId))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "User [uId=" + uId + ", firstName=" + firstName + ", lastName=" + lastName + ", avatarLink=" + avatarLink
				+ ", about=" + about + ", twitterUrl=" + twitterUrl + ", followingCount=" + followingCount
				+ ", followersCount=" + followersCount + "]";
	}
	
	

}
