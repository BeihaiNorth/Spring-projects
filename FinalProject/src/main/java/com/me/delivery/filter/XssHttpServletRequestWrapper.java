package com.me.delivery.filter;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class XssHttpServletRequestWrapper extends HttpServletRequestWrapper {

	HttpServletRequest orgRequest = null;

    public XssHttpServletRequestWrapper(HttpServletRequest request) {
        super(request);
        orgRequest = request;
    }
    /**
     * 覆盖getParameter方法，将参数名和参数值都做xss过滤。<br/>
     * 如果需要获得原始的值，则通过super.getParameterValues(name)来获取<br/>
     * getParameterNames,getParameterValues和getParameterMap也可能需要覆盖
     */
    @Override
    public String getParameter(String name) {
        String value = super.getParameter(xssEncode(name));
        if (value != null) {
            value = xssEncode(value);
        }
        return value;
    }
    /**
     * 覆盖getHeader方法，将参数名和参数值都做xss过滤。<br/>
     * 如果需要获得原始的值，则通过super.getHeaders(name)来获取<br/>
     * getHeaderNames 也可能需要覆盖
     */
    @Override
    public String getHeader(String name) {
        String value = super.getHeader(xssEncode(name));
        if (value != null) {
            value = xssEncode(value);
        }
        return value;
    }
    
    
    private static String xssEncode(String s) {
        if (s == null || s.isEmpty()) {
            return s;
        }
        StringBuilder sb = new StringBuilder(s.length() + 16);
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            switch (c) {
            case '>':
                sb.append('_');
                break;
            case '<':
                sb.append('_');
                break;
            case '\'':
                sb.append('_');
                break;
            case '\"':
                sb.append('_');
                break;
            case '&':
                sb.append('_');
                break;
            case '\\':
                sb.append('_');
                break;
            case '#':
                sb.append('_');
                break;
            case '%':    
                processUrlEncoder(sb, s, i);
                break;
            default:
                sb.append(c);
                break;
            }
        }
        return sb.toString();
    }
    public static void processUrlEncoder(StringBuilder sb, String s, int index){
        if(s.length() >= index + 2){
            if(s.charAt(index+1) == '3' && (s.charAt(index+2) == 'c' || s.charAt(index+2) == 'C')){    
                sb.append('＜');
                return;
            }
            if(s.charAt(index+1) == '6' && s.charAt(index+2) == '0'){   
                sb.append('＜');
                return;
            }            
            if(s.charAt(index+1) == '3' && (s.charAt(index+2) == 'e' || s.charAt(index+2) == 'E')){    
                sb.append('＞');
                return;
            }
            if(s.charAt(index+1) == '6' && s.charAt(index+2) == '2'){   
                sb.append('＞');
                return;
            }
        }
        sb.append(s.charAt(index));
    }
    
    
    public HttpServletRequest getOrgRequest() {
        return orgRequest;
    }
     
    
    public static HttpServletRequest getOrgRequest(HttpServletRequest req) {
        if (req instanceof XssHttpServletRequestWrapper) {
            return ((XssHttpServletRequestWrapper) req).getOrgRequest();
        }
        return req;
    }

}
