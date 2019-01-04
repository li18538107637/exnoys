package com.anying.util;

import java.util.UUID;

public class UUIDUtils
{
  public static String generate()
  {
    return UUID.randomUUID().toString().replaceAll("-", "");
  }
  
  public static String generate2()
  {
    return UUID.randomUUID().toString();
  }
}

