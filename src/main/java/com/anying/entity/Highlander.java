package com.anying.entity;

import java.io.Serializable;

public class Highlander implements Serializable {

	private static final long serialVersionUID = 1L;
	private String id;
	private String title;
	private byte[] details;
	private String content;
	private String create_time;
	private String modify_time;
	private String curType;
	private String isOpen;
	private String fncUrl;
	private String collectors;
	
    public String getCollectors() {
		return collectors;
	}

	public void setCollectors(String collectors) {
		this.collectors = collectors;
	}
	public String getFncUrl() {
		return fncUrl;
	}

	public void setFncUrl(String fncUrl) {
		this.fncUrl = fncUrl;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public void setDetails(byte[] details) {
		this.details = details;
	}

	public String getIsOpen() {
		return isOpen;
	}

	public void setIsOpen(String isOpen) {
		this.isOpen = isOpen;
	}

	public String getCurType() {
		return curType;
	}

	public void setCurType(String cueType) {
		this.curType = cueType;
	}

	public byte[] getDetails() {
		return details;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCreate_time() {
		return create_time;
	}

	public void setCreate_time(String create_time) {
		this.create_time = create_time;
	}

	public String getModify_time() {
		return modify_time;
	}

	public void setModify_time(String modify_time) {
		this.modify_time = modify_time;
	}

}
