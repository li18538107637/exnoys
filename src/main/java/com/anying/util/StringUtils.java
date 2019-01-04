package com.anying.util;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringUtils {
	//鑾峰彇鏌愬瓧绗︾n娆″嚭鐜扮殑浣嶇疆
	 public  static int getStr1(String str, int n,String reg) {
	        int i = 0;
	        int s = 0;
	        while (i++ < n) {
	            s = str.indexOf(reg, s + 1);
	            System.out.println(str);
	            if (s == -1) {
	                return -1;
	            }
	        }
	        return s;
	    }
	//鑾峰彇鏌愬瓧绗﹀�鏁扮m+1娆″嚭鐜扮殑浣嶇疆
	 public  static int getStr2(String str, int n,String reg,int m) {
	        int i = 0;
	        int s = 0;
	        Map<Integer, Integer> map=new HashMap<Integer, Integer>();
	        while (i++ < n) {
	            s = str.indexOf(reg, s + 1);
	            if (s == -1) {
	                return -1;
	            }
	            map.put(i,s);
	        }
	        return map.get(n-m);
	    }
	//鏌愬瓧绗︿覆鍑虹幇娆℃暟
	 public static int appearNumber(String srcText, String findText) {
		    int count = 0;
		    Pattern p = Pattern.compile(findText);
		    Matcher m = p.matcher(srcText);
		    while (m.find()) {
		        count++;
		    }
		    return count;
		} 
}
