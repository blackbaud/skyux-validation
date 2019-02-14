import {
  SkyValidationTool
} from './validation-tool';

describe('Validation tool', () => {
  describe('Email validation', () => {
    it('should validate correct input', () => {
      const isEmailValid = SkyValidationTool.validateEmailAddress('you@lostin.asia');
      expect(isEmailValid).toBeTruthy();
    });

    it('should validate incorrect input', () => {
      const isEmailValid = SkyValidationTool.validateEmailAddress('[]awefhawenfc0293ejwf');
      expect(isEmailValid).toBeFalsy();
    });

    it('should validate incorrect input with multiple @ symbols', () => {
      const isEmailValid = SkyValidationTool.validateEmailAddress('joe@abc.com@abc.com');
      expect(isEmailValid).toBeFalsy();
    });
  });

  describe('Url validation', () => {
    it('should validate correct input', () => {
      const isUrlValid = SkyValidationTool.validateUrl('https://blackbaud.com');
      expect(isUrlValid).toBeTruthy();
    });

    it('should validate incorrect input', () => {
      const isUrlValid = SkyValidationTool.validateUrl('[]awefhawenfc0293ejwf]');
      expect(isUrlValid).toBeFalsy();
    });
  });
});
