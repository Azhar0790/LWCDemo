public with sharing class trialLWCComponent {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        List<Contact> cntList=[Select id,name from contact];
        System.debug('cntList :'+cntList);
        return cntList;
    }
}