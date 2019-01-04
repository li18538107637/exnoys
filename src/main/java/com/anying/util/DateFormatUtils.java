package com.anying.util;

import java.text.SimpleDateFormat;

public class DateFormatUtils {

    public  String DateToString(long l){
    return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(l);
    }
}
